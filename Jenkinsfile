pipeline {
    agent test
    stages {
        stage('before job starts') {
            steps {
              "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}"
            }
        stages {
           stage('Build') { 
             steps {
               docker build -t ${IMAGE}
               docker push ${IMAGE}
            }
        }
        stage('Test') { 
            steps {
                echo "This is Test stage." 
            }
        }
        stage('Deploy') { 
            steps {
              docker pull ${IMAGE}
              docker run -d --name devops -p 5173:5173 ${IMAGE}
            }
        }
    }
}