(ns cheshire-cat.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [goog.dom :as dom]
            ))

(defn ^:export init []
  (repl/connect "http://localhost:9000/repl")
  (go
    (let [response (<! (http/get "/cheshire-cat"))
          body (:body response)]
      (dom/setTextContent (dom/getElement "cat-name") (:name body))
      (dom/setTextContent (dom/getElement "status") (:status body))
             )))
