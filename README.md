# whitelist-actors

Github action that causes a failure if the actor in the github context does not match a whitelisted username.

## Usage

Pass a list of comma-separated github usersnames.

```
steps:
- uses: synapsestudios/whitelist-actors@v1
  with:
    whitelist: 'chestercharles, cooldude5000, someguy13'
```
