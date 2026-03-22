# Étape 1 : Build dyal l-Projet
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# K-n-buildiw l-Jar bla ma n-testiw bach y-zreb
RUN mvn clean package -DskipTests

# Étape 2 : Run dyal l-Projet
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]