# 🗂 Data Structure Quick Guide (JS)

### 1️⃣ Step 1: What am I storing? (_Nouns → Objects_)

- **Map** → Key–Value pairs
  - Nouns: _ID → record_, _ISBN → book_, _SKU → product_, _userID → profile_
- **Set** → Unique items only
  - Nouns: _users_, _emails_, _tags_, _procedures_, _allergies_
- **Array** → Ordered sequence
  - Nouns: _playlist_, _leaderboard_, _guest list_, _queue_, _top 10_

---

### 2️⃣ Step 2: What operations do I need? (_Verbs → Operations_)

Classify the verbs to a type of operation:
verbs -> Type of operation
|Operation Type|Action Description|
|---|---|
| Read / Access:| retrieve an element/value.|
| Write / Update:| modify an existing element/value.|
| Insert / Add:| add a new element/value.|
| Delete / Remove:| remove an element/value.|
| Lookup (by key)| : find a value given a key (dictionary).|
| Membership test: | is X present?|
| Iterate / Traverse:| visit all elements.|
| Order / Sort | / Rank: maintain or compute ordering; top-N.|
| Aggregate / Count | / Group: totals, frequencies.|
| Set algebra: | union, intersection, difference.|
| **Verb (Action)** | **Noun (Object)** | **Best Structure** | **Why** |
| -------------------------------- | ---------------------- | ------------------ | -------------------------- |
| **look up / retrieve** | record, detail, object | **Map** | O(1) key lookup |
| **check / is in / membership** | user, email, tag | **Set** | O(1) membership test |
| **maintain / preserve order** | playlist, guest list | **Array** | insertion order guaranteed |
| **count / map quantities** | item, product, word | **Map** | key → frequency/quantity |
| **union / difference / overlap** | sets, groups | **Set** | built-in set operations |
| **rank / sort / top N** | scores, prices | **Array** | sorting support |
