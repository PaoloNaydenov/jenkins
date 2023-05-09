pipeline {
    agent { node { label 'test' } }
    
    environment {
        
        IMAGE = "paolonaydenov/dev:0.1"
      
    }
    
    stages {
        stage('before job starts') {
            steps {
              echo "login"
                }
        }
        stage('Build') { 
             steps {
               sh "docker build -t ${IMAGE} ."
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
