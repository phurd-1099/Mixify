package com.userServices.UserServices.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.userServices.UserServices.repository.modelRepoUser.ModelUser;
import com.userServices.UserServices.repository.modelRepoUser.ModelUserRepository;

@RestController
public class UserController {
    @Autowired
    ModelUserRepository userRep;

    @GetMapping("/findAll")
    public List<ModelUser> getAllUsers() {
        return userRep.findAll();
    }

    // Runs a check on the userDatabase to see if the user is there
    // *NOTE: Need to add Spotifytoken to tag and run check if it is a valid token
    // */
    @GetMapping("/isUser/{username}")
    public boolean isUser(@PathVariable String username) {
        List<ModelUser> results = userRep.findByUsername(username);
        if (results.size() == 1) {
            return true;
        } else
            return false;
    }

}
