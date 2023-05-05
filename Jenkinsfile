pipeline {
    agent { node { label 'test' } }
    
    environment {
        
        IMAGE = "paolonaydenov/dev:0.1"
        DOCKER_USER = "paolonaydenov"
        DOCKER_PASS = "Esreal00511"
    }
    
    stages {
        stage('before job starts') {
            steps {
              sh "sudo su" "paolo1234"
              sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}"
                }
        }
        stage('Build') { 
             steps {
               sh "docker build -t ${IMAGE}"
               sh "docker push ${IMAGE}"
                }
            }
        stage('Test') { 
            steps {
                echo "This is Test stage." 
            }
        }
        stage('Deploy') { 
            steps {
              sh "docker pull ${IMAGE}"
              sh "docker run -d --name devops -p 5173:5173 ${IMAGE}"
            }
        }
    }
}
