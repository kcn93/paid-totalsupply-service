# API Total Supply PAID Token

**Table of Contents**

- [Motivation](#motivation)
- [Specification](#specification)
- [Proposed Solution](#proposed-solution)
  - [Bases of the calculation of Circulating of PAID Token](#Bases-of-the-calculation-of-Circulating-of-PAID-Token)
  - [Explanation of the calculation of the PAID Token in Circulation](#Explanation-of-the-calculation-of-the-PAID-Token-in-circulation)
- [Docker and Makefile](#Docker-and-Makefile)

This specification is based on:

* API for DECENT-BET
* Calculate of Circulating Supply based in API Endpoints of [PoaNetwork](https://www.poa.network/)

## Motivation

The main motivations of this API

* Design an API for Exchanges and pages like CoinMarketCap (CMC), that update the Paid Token Total Supply and Circulating Supply
## Specification

* Total supply, Basic function of the [ERC20](https://eips.ethereum.org/EIPS/eip-20) Standard
* Circulating Supply, based in [CertiK Audit Of PAID Network & Transparency Report](https://paidnetwork.medium.com/certik-audit-of-paid-network-transparency-report-6d1935c81f2d).
* Allocation Distribution, based in [Token Metrics](https://docsend.com/view/imqcakbb3t8isgp6)

## Proposed Solution

### Fundamentals to PAID Token Circulating Amount calculation::

* The Total Supply of the Official PAID Token Smart Contract is taken as a basis
* PAID Token Smart Contract Audit, carried out by the company CertiK, and the Complete Token issuance process, together with all the transfers committed in different allocation established to said issuance process, is taken as basis to calculating Circulating Token Amount.
* The Token Metrics Document, which establishes the distribution of PAID Token, according to an allocation, and pre-established distribution, that has been fulfilled and will be fully fulfilled for the next 360 days, from January 25, 2021, it's taken as basis

### Explaining the circulating PAID Token calculation:

**The calculation method is under review**

#### The calculation of PAID Token circulating supply, is based on the premise that all token that are Unlocked and not strictly under the control of the PAID Network Foundation are in fact, Circulating Supply.
#### Therefore, the balances of the following wallets corresponding to the allocation described here, has been considered excluded from circulation:
- **Ecosystem and Referrals** allocation was issued 148,679,363.9275 PAID tokens with a vesting period of first unlock at day 30, 1.66% every month for 60 months. The address of this allocation is the following: [0x88081F72b59FdD998c1443CC3721DdE1cc451003](https://etherscan.io/address/0x88081F72b59FdD998c1443CC3721DdE1cc451003). This address is held by the PAID Network Foundation.
- **Research Foundation** allocation was issued 118,943,491.142 PAID tokens with a vesting period of first unlock at day 180, 1.66% every month for 60 months. The address of this allocation is the following: [0xf0Ef677d63B587F6d49dB3c0275c4E4Db6dc0b2D](https://etherscan.io/address/0xf0Ef677d63B587F6d49dB3c0275c4E4Db6dc0b2D). This address is held by the PAID Network Foundation.
- **General Reserve** allocation was issued 46,611,482.1985271 PAID tokens with a vesting period of first unlock at day 180, 1.66% every month for 60 months. The address of this allocation is the following: [0x9C5Be5e3491106E64dF0Ba5EbC1c1e195a07Ab7c](https://etherscan.io/address/0x9c5be5e3491106e64df0ba5ebc1c1e195a07ab7c). This address is held by the PAID Network Foundation.
- **Staking Rewards** allocation was issued 59,471,745.571 PAID tokens with no vesting period as these tokens will be rewarded through PAID and Iginiton platforms gradually. The address of this allocation is the following: [0xD500AA2CffB70F460F4Da6aFA038CE35bed029BC](https://etherscan.io/address/0xD500AA2CffB70F460F4Da6aFA038CE35bed029BC). This address is held by the PAID Network Foundation.
- There were **Advisors and Contractors** that were eligible for advisor tokens, but due to the milestone-based nature of the contract between the PAID Network Foundation and the contractors, these tokens were issued separately to an Extra Reserve for Advisors allocation with 100% unlock at the listing date. This allocation was issued a total of 11,089,470.2958095 PAID tokens. The minting transaction of this allocation can be seen [0x320e7CCC4f3430697e9Cf82E4F1b6461ed58d793](https://etherscan.io/address/0x320e7ccc4f3430697e9cf82e4f1b6461ed58d793) .These tokens are held by PAID Network Foundation and will be gradually released as milestones are achieved.

#### In additional the locked PAID Token of the following wallets corresponding to the allocation described here, has been considered excluded from circulation:
- **Team allocation** was issued a total of 96,046,869.097165 PAID tokens with a vesting period of first unlock at day 360, 4.16% every month for 24 months. The transaction of the tokens issued to the team members can be seen [here](https://etherscan.io/tx/0x0c9471a0765b0a12ecb5cc2a44d61599262df09ac0141d320588095dcfd3778e).
- **Advisor allocation** was issued a total of 11,771,461.2694698 PAID tokens with a vesting period of first unlock at day 30, 4.16% every month for 24 months. The transaction of the tokens issued to the advisors can be seen [here](https://etherscan.io/tx/0x4a4853f9d8461092d39eba63a1923d86e7ce723035ea90d198de71c011a3dabe).
- There were **Advisors and Contractors** that were eligible for advisor tokens, but due to the milestone-based nature of the contract between the PAID Network Foundation and the contractors, these tokens were issued separately to an Extra Reserve for Advisors allocation with 100% unlock at the listing date. This allocation was issued a total of 11,089,470.2958095 PAID tokens. The minting transaction of this allocation can be seen [here](https://etherscan.io/tx/0xc8226147c724c47118698f8bbb69647ca5676f93fdf594cb60889dae5e35c6b4). These tokens are held by PAID Network Foundation and will be gradually released as milestones are achieved.
- The Seed purchasers were issued tokens at two different transactions. These tokens have a vesting period of first unlock at day 30, 11.11% every month for 9 months. Both transactions can be seen [here](https://etherscan.io/tx/0x54839a6d0859a98482c1028952cbea39f614b2e7ada89e46e357582aff5d6f4e) and [here](https://etherscan.io/tx/0xd2c287606912c1ce25aeb03ac9a5803933238f4a2066591b25a86677ef3b9ea2). A total of 57 seed purchasers were issued tokens.
- The Private Sale A purchasers were issued tokens at six different transactions. All of the transactions can be seen here: [1](https://etherscan.io/tx/0x0856641840e1bdc779a792cda575851c8f6488e66a3488ea639a7395293bf721), [2](https://etherscan.io/tx/0x7c1ef96f81158c37af9c4e0ba02e260f2c99116ac0a4936e7d44a199d8dcae46), [3](https://etherscan.io/tx/0x1122810ce80123ea788384a567224ce22670888eee730c9a75dac65417a138c2), [4](https://etherscan.io/tx/0xfbb0809c8901e7724e44ed67c35cd4e4336f200c1a6be13e21fa4cccb55ab2a6), [5](https://etherscan.io/tx/0x7a9faa06f6b1db6d966bb8c453a6049cea9f70b6943b89eded26542d5eca57cb), [6](https://etherscan.io/tx/0x1c78fc3e7cc56c5cced5d27369be01560788868bd2e9609e5c12dee0335a4458). There was a purchaser that shared their address late. There was one minting later on, which can be seen [here](https://etherscan.io/tx/0xcb99a58d523f86b80907d0b3a88f001b003886c7d58947bb6f38ca69496b0428). A total of 159 Private A purchasers were issued tokens.
- The Private Sale B purchasers were issued tokens at one transaction. The transaction can be seen [here](https://etherscan.io/tx/0xb2502261039bf0e29a9e3c9a54f87d69f1d0f4439cc867f25f8f062d32b48e25). There was a purchaser that shared their address late. A total of 20 Private A purchasers were issued tokens.
- The Public Sale, which occurred off Polkastarter, were issued tokens at five different transactions. All of the transactions can be seen here: [1](https://etherscan.io/tx/0x29da11cc31d84576483450dfaac86508bd0e728ce4dc91d7c82b3dc84237015b), [2](https://etherscan.io/tx/0x945ff0cd5dfa21f97d1cb7b6db3fd072afac63b5cb16ea4ce42b608e59ca6618), [3](https://etherscan.io/tx/0x447c76f0985f4d35686c5d0c60ece5bc9aa9f05bac3fa51dba10bb3630f098c4), [4](https://etherscan.io/tx/0xc586f229a167408594fa37742ec3c9e1182f6fd3b2cf49165aea0b5ad8240046), [5](https://etherscan.io/tx/0x6325e3187720ced19a938a0945cf3e215db7ab74059127e188889d6a01918a07). There were several purchasers that sent us their addresses late, here are the extra transactions: [1](https://etherscan.io/tx/0xb40b3a98e8a17a12cefb0df65fd9edad7c2837d0f2135ef4b518ae8c113a3da0), [2](https://etherscan.io/tx/0xb25bbf4cbe02c340285da77b5b0beb4f049bf78fca64af9475e551b65f7f8142).

`circulating = totalsupply - lockedToken(ecosystem + research + general reserve + stake_rewards + contractors + team + advisors + seed + private + public)`

**The calculation method is under review**

## Docker and Makefile

Copy .env.example to .env and replace to the proper values
```bash
cp .env.example .env
```

Build a new docker image and start a new container afterwards.
```bash
make up
```

Remove a previous container 
```bash
make down
```

Get container logs
```bash
make logs
```