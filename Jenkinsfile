pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm.cmd install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm.cmd test'
            }
        }
    }
}