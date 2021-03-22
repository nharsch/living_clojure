(ns ch03.clj)



;; agents
(def who-agent (agent :caterpillar))
@who-agent

(defn change [state]
  (case state
    :caterpillar :chrysalis
    :chrysalis :butterfly
    :butterfly)
  )

(send who-agent change)
@who-agent
(send-off who-agent change)
@who-agent

(defn change-error [state]
  (throw (Exception. "Boom!")))

(send who-agent change-error)
@who-agent

;; agents must be restarted after errored
(agent-errors who-agent)
(restart-agent who-agent)
@who-agent
