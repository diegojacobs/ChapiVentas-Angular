pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        sh '''PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin

npm install'''
      }
    }
    stage('Run Unit Tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Run e2e Tests') {
      steps {
        sh 'npm run update-e2e'
        sh 'npm run start-e2e'
        sh 'npm run e2e'
      }
    }
    stage('Deploy ') {
      steps {
        sh 'npm start'
      }
    }
  }
  environment {
    DEV = ''
  }
}