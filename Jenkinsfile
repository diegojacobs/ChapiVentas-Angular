pipeline {
  agent { 
    node { 
      label 'docker'
    }
  }
  stages {
    stage('Verify Tools') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
  }
}
