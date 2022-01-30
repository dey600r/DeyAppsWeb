node {
  stage('SCM') {
    checkout scm
  }
  stages {
    stage('Install') { 
      steps {
          sh 'npm install' 
      }
    }
  }
  stages {
    stage('Build') { 
      steps {
          sh 'ng test --code-coverage --watch=false' 
      }
    }
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}