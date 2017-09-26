package br.org.webapp.jsf.fixture;

import static br.org.verify.Verify.isEmptyOrNull;
import static br.org.verify.Verify.isNull;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

/**
 * <p>Carregador de arquivos YAML.</p>
 * 
 * @author thiago-amm
 * @version v1.0.0 01/09/2017
 * @since v1.0.0
 */
public class FixtureLoader {
   
   public static InputStream load(String path) {
      if (isEmptyOrNull(path)) {
         throw new IllegalArgumentException("ATENÇÃO: O path não pode ser vazio ou nulo!");
      }
      return FixtureLoader.class.getResourceAsStream(path);
   }
   
   public static InputStream load(File file) {
      InputStream inputStream = null;
      if (isNull(file)) {
         throw new IllegalArgumentException("ATENÇÃO: O arquivo não poder ser nulo!");
      }
      try {
         inputStream = new FileInputStream(file);
      } catch (FileNotFoundException e) {
         e.printStackTrace();
      }
      return inputStream;
   }
   
}
