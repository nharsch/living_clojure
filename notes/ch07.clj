(ns ch07.core
  (:require [clojure.core.async :as async]))

;; core.async
;; create a channel with a 10 size buffer
(def tea-channel (async/chan 10))

;; blocking put >!!
(async/>!! tea-channel :cuppa)
;; blocking take <!!
(async/<!! tea-channel)

;; channels can be closed, but you can still take items off

;; we can consumer from more than one channel at a time

(def tea-channel (async/chan 10))
(def milk-channel (async/chan 10))
(def sugar-channel (async/chan 10))

(async/go-loop []
  (let [[v ch] (async/alts! [tea-channel
                             milk-channel
                             sugar-channel])]
    (println "Got " v " from " ch)
    (recur)))

(async/>!! sugar-channel :sugar)
(async/>!! milk-channel :milk)
