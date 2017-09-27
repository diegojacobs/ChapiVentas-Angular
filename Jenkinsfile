pipeline {
  agent { 
    node { 
      label 'docker'
    }
  }
  tools {
    nodejs 'nodejs'
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
