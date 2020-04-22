## Social Key Recovery

Share your keys with firends or family to recover them when needed.

<sub><sup>This is published [here](https://al2blockchain.github.io/social-key-recovery) as a demo, but you **should** download it and use it locally in your computer (if you trust it!).</sup></sub>

### Usage

Double click `index.html` or `share.html` or `reveal.html`.

#### Share

Enter your **key**, then, enter the **number of friends, including you, of course!** that will share the key, and then, the number of **friends needed to recover** it. Finally click the **Share** button to get a **shared key for each friend**. You can then safely mail/print/write a key to a friend but remember: **these keys should NEVER remain together!**.

#### Reveal

Enter the **number of friends** that are needed to recover the key. Then, each friend must **enter his share**. Finally click the **Reveal** button.

### References

Based on [secrets.js](https://github.com/grempe/secrets.js), an implementation of the amazing [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing) algorithm.
