
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

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t student-management-node .'
            }
        }

        stage('Deploy Docker Container') {
            steps {
                bat 'docker rm -f student-management-container || exit /b 0'
                bat 'docker run -d --name student-management-container -p 3000:3000 student-management-node'
            }
        }
    }
}
