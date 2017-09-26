package br.org.webapp.jsf.listener;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import lombok.extern.log4j.Log4j;

/**
 * @author thiago-amm
 * @version v1.0.0 21/09/2017
 * @since v1.0.0
 */
@Log4j
public class SessionListener implements HttpSessionListener {
   
   @Override
   public void sessionCreated(HttpSessionEvent event) {
      log.info("Sessão criada!");
   }
   
   @Override
   public void sessionDestroyed(HttpSessionEvent event) {
      log.info("Sessão destruída!");
   }
   
}
