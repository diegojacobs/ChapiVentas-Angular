#!/usr/bin/env groovy
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
        sh 'sudo su'
      }
    }
  }
}
