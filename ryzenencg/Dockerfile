# Étape 1 : Build
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Étape 2 : Run
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# 💥 THE HACKER TRICK: Hugging Face k-y-khdem GHI f port 7860
EXPOSE 7860

# Permissions bach y-khdem z-zebda
RUN chmod 777 /app/app.jar

# K-n-forciw Spring Boot y-démari f 7860
ENTRYPOINT ["java", "-jar", "app.jar", "--server.port=7860"]