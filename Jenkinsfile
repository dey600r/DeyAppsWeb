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
}