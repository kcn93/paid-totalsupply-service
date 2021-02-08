# API Total Supply PAID Token

**Table of Contents**

- [Motivation](#motivation)
- [Specification](#specification)
- [Proposed Solution](#proposed-solution)
  - [Bases of the calculation of Circulating of PAID Token](##Bases-of-the-calculation-of-Circulating-of-PAID-Token)
  - [Explanation of the calculation of the PAID Token in Circulation](#Explanation-of-the-calculation-of-the-PAID-Token-in-circulation)

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
* PAID Token Smart Contract Audit, carried out by the company CertiK, and the Complete Token issuance process, together with all the transfers committed in  differents allocation established to said issuance process, is taken as basis to calculating Circulating Token Amount.
* The Token Metrics Document, which establishes the distribution of PAID Token, according to an allocation, and pre-established distribution, that has been fulfilled and will be fully fulfilled for the next 360 days, from January 25, 2021, it's taken as basis

### Explaining the circulating PAID Token calculation:

#### The calculation method is under review

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


#### The calculation method is under review

