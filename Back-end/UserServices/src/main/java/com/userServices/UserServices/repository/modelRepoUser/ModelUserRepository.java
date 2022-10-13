package com.userServices.UserServices.repository.modelRepoUser;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ModelUserRepository extends MongoRepository<ModelUser, String> {

    @Query("{username:?0}")
    List<ModelUser> findByUsername(String username);
}
