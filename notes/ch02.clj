(ns ch02.core)

;; Destructuring
(let [[color size] ["blue" "small"]]
  (str color size))

;; recursion using loop/recur is optimized, uses less stacks than
;; calling funtion within a function (tradidional recursion)
