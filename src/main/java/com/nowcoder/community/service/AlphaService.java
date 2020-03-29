package com.nowcoder.community.service;

import com.nowcoder.community.dao.AlphaDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Service
public class AlphaService {

    @Autowired
    private AlphaDao alphaDao;

    public AlphaService(){
        System.out.println("实例化对象");
    }

    @PostConstruct
    public void init(){
        System.out.println("初始化对象");
    }

    @PreDestroy
    public void destroy(){
        System.out.println("销毁对象");
    }

    public String find(){
        return alphaDao.select();
    }

}
