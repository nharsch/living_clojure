(defproject cheshire-cat "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [cider/piggieback "0.4.2"]
                 [org.clojure/clojurescript "1.10.764"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-json "0.3.1"]
                 [cljs-http "0.1.18"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [cheshire "5.4.0"]
                 [enfocus "2.1.1"]
                 ]
  :plugins [
            [lein-ring "0.12.5"]
            [lein-cljsbuild "1.1.8"]
            ]
  :ring {:handler cheshire-cat.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]}}
  :cljsbuild {
              :builds [{
                        :source-paths ["src-cljs"]
                        :compiler {
                                   :output-to "resources/public/main.js"
                                   :optimizations :whitespace
                                   :pretty-print true
                                   }
                        }]
              }
  :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
  )
