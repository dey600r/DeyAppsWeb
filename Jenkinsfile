node {
  stage('SCM') {
    checkout scm
  }
  stage('Install and Test') { 
    nodejs(nodeJSInstallationName: 'NodeJS') {
      sh 'npm install'
      sh 'ng test --code-coverage --watch=false'
    }
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      nodejs(nodeJSInstallationName: 'NodeJS') {
        sh "${scannerHome}/bin/sonar-scanner"
      }
    }
  }
  stage('Build Prod') { 
    nodejs(nodeJSInstallationName: 'NodeJS') {
      sh 'ng build --configuration=firebase'
    }
  }
  stage('Deploy') {
    sshagent(credentials: ['remote_user']) {
      sh '''
        date_backup=backup-$(date +%d)-$(date +%m)-$(date +%Y)-$(date +%H):$(date +%M):$(date +%S)
        pathDeploy=./deyapps-web
        pathDeployWeb=$pathDeploy/www
        pathDeployBackup=$pathDeploy/backup
        remoteUser=remote_user
        remoteHost=nginx-ssh
        ssh $remoteUser@$remoteHost mkdir $pathDeployBackup/$date_backup
        ssh $remoteUser@$remoteHost mv $pathDeployWeb/* $pathDeployBackup/$date_backup
        scp -r ./dist/DeyApps/* $remoteUser@$remoteHost:$pathDeployWeb
      '''
    }   
  }
  stage('Save Artifacts and Test') {
    sh '''
      date_artifact=mtm-web-$(date +%d)-$(date +%m)-$(date +%Y)-$(date +%H):$(date +%M):$(date +%S)
      outputPath=output_version
      mkdir -p $outputPath
      zip -r ./$outputPath/$date_artifact.zip ./dist/DeyApps/*
    '''
    archiveArtifacts artifacts: 'output_version/*.zip'
    junit 'coverage/junit/**/*.xml'
    cobertura coberturaReportFile: 'coverage/*coverage.xml'
  }
}
