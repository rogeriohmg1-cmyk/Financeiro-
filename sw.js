{
  "rules": {
    "medvisit": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "financeiro": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "$other": {
      ".read": false,
      ".write": false
    }
  }
}
