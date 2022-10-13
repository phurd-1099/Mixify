package com.userServices.UserServices.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = {
        "com.userServices.UserServices.repository.modelRepoPlaylist" }, mongoTemplateRef = PlaylistDbConfig.MONGO_TEMPLATE)
public class PlaylistDbConfig {
    protected static final String MONGO_TEMPLATE = "newUserDbMongoTemplate";
}
