# Total Supply PAID Token API

**Table of Contents**

- [Motivation](#motivation)
- [Specification](#specification)
- [Proposed Solution](#proposed-solution)
  - [Bases of the calculation of Circulating of PAID Token](Bases of the calculation of Circulating of PAID Token)
  - [Explanation of the calculation of the PAID Token in circulation](Explanation of the calculation of the PAID Token in circulation)

This specification is based on:

* API for DECENT-BET
* Calculate of Circulating Supply based in API Endpoints of [PoaNetwork](https://www.poa.network/)

## Motivation

The main motivations of this API

* Design the API for Exchanges and CoinMarketCap (CMC), for update the Total Supply and Circulating Supply

## Specification

* Total supply, Basic function of the ERC20 Standard
* Circulating Supply, based in [CertiK Audit Of PAID Network & Transparency Report](https://paidnetwork.medium.com/certik-audit-of-paid-network-transparency-report-6d1935c81f2d)

## Proposed Solution

### Bases of the calculation of Circulating of PAID Token:

* The Total Supply of the Official PAID Token Smart Contract is taken as a basis
* The Audit carried out by the company CertiK, on the Smart Contract of the PAID Token and the Complete Token issuance process, together with all the transfers committed in the different Allocation established for said issuance process, is taken as the basis for calculating Circulating.
* It is taken as the basis for the Token Metrics Document, which establishes the distribution of the PAID Token, according to an allocation, and pre-established distribution that has been fulfilled and will be fully fulfilled for the next 360 days, from January 25, 2021

### Explanation of the calculation of the PAID Token in circulation:

* The calculation of the circulating supply of the PAID Token is based on the assumption that all Token that are not strictly under the control of the PAID Network Foundation, therefore the balances of the following wallets corresponding to the discrete allocation here are considered excluded from the circulating :
- Ecosystem and Referrals allocation was issued 148,679,363.9275 PAID tokens with a vesting period of first unlock at day 30, 1.66% every month for 60 months. The address of this allocation is the following: 0x88081F72b59FdD998c1443CC3721DdE1cc451003. This address is held by the PAID Network Foundation.
- Research Foundation allocation was issued 118,943,491.142 PAID tokens with a vesting period of first unlock at day 180, 1.66% every month for 60 months. The address of this allocation is the following: 0xf0Ef677d63B587F6d49dB3c0275c4E4Db6dc0b2D. This address is held by the PAID Network Foundation.
- General Reserve allocation was issued 46,611,482.1985271 PAID tokens with a vesting period of first unlock at day 180, 1.66% every month for 60 months. The address of this allocation is the following: 0x9C5Be5e3491106E64dF0Ba5EbC1c1e195a07Ab7c. This address is held by the PAID Network Foundation.
- Staking Rewards allocation was issued 59,471,745.571 PAID tokens with no vesting period as these tokens will be rewarded through PAID and Iginiton platforms gradually. The address of this allocation is the following: 0xD500AA2CffB70F460F4Da6aFA038CE35bed029BC. This address is held by the PAID Network Foundation.
- There were advisors and contractors that were eligible for advisor tokens, but due to the milestone-based nature of the contract between the PAID Network Foundation and the contractors, these tokens were issued separately to an Extra Reserve for Advisors allocation with 100% unlock at the listing date. This allocation was issued a total of 11,089,470.2958095 PAID tokens. The minting transaction of this allocation can be seen here. These tokens are held by PAID Network Foundation and will be gradually released as milestones are achieved.