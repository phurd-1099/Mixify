package com.userServices.UserServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.userServices.UserServices.repository.modelRepoUser.ModelUser;
import com.userServices.UserServices.repository.modelRepoUser.ModelUserRepository;

@SpringBootApplication
public class UserServicesApplication implements CommandLineRunner {

	@Autowired
	private ModelUserRepository userRepo;

	public static void main(String[] args) {
		SpringApplication.run(UserServicesApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		this.userRepo.save(new ModelUser(null, "test_username"));

	}

}
