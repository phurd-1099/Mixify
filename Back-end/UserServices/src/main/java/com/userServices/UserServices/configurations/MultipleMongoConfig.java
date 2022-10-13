package com.userServices.UserServices.configurations;

import org.springframework.boot.autoconfigure.mongo.MongoProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;

@Configuration
public class MultipleMongoConfig {
    @Primary
    @Bean(name = "newUserDbProperties")
    @ConfigurationProperties(prefix = "spring.data.mongodb.user")
    public MongoProperties getUserDbProps() throws Exception {
        return new MongoProperties();
    }

    @Bean(name = "newPlaylistDbProperties")
    @ConfigurationProperties(prefix = "spring.data.mongodb.playlist")
    public MongoProperties getPlaylistDbProps() throws Exception {
        return new MongoProperties();
    }

    @Primary
    @Bean(name = "newUserDbMongoTemplate")
    public MongoTemplate newUserDbMongoTemplate() throws Exception {
        return new MongoTemplate(newUserDbMongoDatabaseFactory(getUserDbProps()));
    }

    @Bean(name = "newPlaylistDbMongoTemplate")
    public MongoTemplate newPlaylistDbMongoTemplate() throws Exception {
        return new MongoTemplate(newPlaylistDbMongoDatabaseFactory(getPlaylistDbProps()));
    }

    @Primary
    @Bean
    public MongoDatabaseFactory newUserDbMongoDatabaseFactory(MongoProperties mongo) throws Exception {
        return new SimpleMongoClientDatabaseFactory(
                mongo.getUri());
    }

    @Bean
    public MongoDatabaseFactory newPlaylistDbMongoDatabaseFactory(MongoProperties mongo) throws Exception {
        return new SimpleMongoClientDatabaseFactory(
                mongo.getUri());
    }

}
