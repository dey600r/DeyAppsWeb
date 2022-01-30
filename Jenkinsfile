node {
  stage('SCM') {
    checkout scm
  }
  stage('Install') { 
    steps {
        sh 'npm install' 
    }
  }
  stage('Build') { 
    steps {
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