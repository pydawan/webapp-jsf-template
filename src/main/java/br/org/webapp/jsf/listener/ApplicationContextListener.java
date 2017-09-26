package br.org.webapp.jsf.listener;

import java.io.IOException;

import javax.servlet.ServletContextEvent;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.mashape.unirest.http.ObjectMapper;
import com.mashape.unirest.http.Unirest;

import lombok.extern.log4j.Log4j;

/**
 * @author thiago-amm
 * @version v1.0.0 21/09/2017
 * @since v1.0.0
 */
@Log4j
public class ApplicationContextListener {
   
   public void contextInitialized(ServletContextEvent servletContextEvent) {
      
      log.info("Aplicação iniciada.");
      
      Unirest.setObjectMapper(new ObjectMapper() {
         
         private com.fasterxml.jackson.databind.ObjectMapper jacksonObjectMapper = new com.fasterxml.jackson.databind.ObjectMapper();
         
         public <T> T readValue(String value, Class<T> valueType) {
            try {
               return jacksonObjectMapper.readValue(value, valueType);
            } catch (IOException e) {
               throw new RuntimeException(e);
            }
         }
         
         public String writeValue(Object value) {
            try {
               return jacksonObjectMapper.writeValueAsString(value);
            } catch (JsonProcessingException e) {
               throw new RuntimeException(e);
            }
         }
         
      });
      
   }
   
   public void contextDestroyed(ServletContextEvent servletContextEvent) {
      log.info("Aplicação finalizada.");
   }
   
}
