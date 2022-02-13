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
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
  stage('Build Prod') { 
    nodejs(nodeJSInstallationName: 'NodeJS') {
      sh 'ng build --configuration=production'
    }
  }
  stage('Deploy') { 
    sh 'scp -r * remote_nginx@nginx:/home/remote_nginx/www'
  }
}