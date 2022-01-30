node {
  stage('SCM') {
    checkout scm
  }
  stage('Install') { 
    nodejs(nodeJSInstallationName: 'NodeJS') {
        sh 'npm install'
    }
  }
  stage('Build') { 
    sh 'ng test --code-coverage --watch=false'
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}