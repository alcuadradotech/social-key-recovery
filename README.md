## Social Key Recovery

Secure your secret key through sharing a set of keys with family or persons and recover the secret key by putting the shared keys together.

A demo is published [here](https://al2blockchain.github.io/social-key-recovery) but feel free to download and launch it from your computer or any device you can trust.

### Usage

Double click `index.html` or `share.html` or `reveal.html` to open it in your browser.

#### Share

Enter your **secret key**, then, enter the **number of persons** that will share the key including yourself(!), and then, the number of **persons needed to recover** it. Finally click the **Share** button to get a **shared key for each person**. You can then safely mail/print/write them to each person and be careful to **keep the shared keys always separated, NEVER together!**.

#### Recover

Enter the **number of persons** that are needed to recover the key. Then, each person must **enter his shared key**. Finally click the **Recover** button.

### References

Based on [secrets.js](https://github.com/grempe/secrets.js), an implementation of the amazing [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing) algorithm.
