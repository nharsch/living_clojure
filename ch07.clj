(ns ch07.core
  (:require [clojure.core.async :as async]))

;; core.async
;; create a channel with a 10 size buffer
(def tea-channel (async/chan 10))

;; blocking put >!!
(async/>!! tea-channel :cuppa)
;; blocking take <!!
(async/<!! tea-channel)

;; channels can be closed, but still
