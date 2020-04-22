## Social Key Recovery

Share your keys with firends or family to recover them when needed.

A demo is published [here](https://al2blockchain.github.io/social-key-recovery), fell free to download and launch it from your computer.

### Usage

Double click `index.html` or `share.html` or `recover.html`.

#### Share

Enter your **key**, then, enter the **number of friends, including you, of course!** that will share the key, and then, the number of **friends needed to recover** it. Finally click the **Share** button to get a **shared key for each friend**. You can then safely mail/print/write a key to a friend but remember: **these keys should NEVER remain together!**.

#### Recover

Enter the **number of friends** that are needed to recover the key. Then, each friend must **enter his share**. Finally click the **Recover** button.

### References

Based on [secrets.js](https://github.com/grempe/secrets.js), an implementation of the amazing [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing) algorithm.
