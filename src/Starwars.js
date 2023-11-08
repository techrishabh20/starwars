import React from 'react';

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      imageUrl: null,
      films: [],
      
    }
  }


  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          imageUrl: data.image,
          loadedCharacter: true,
        })
      })
  }

  render(){

    return (
      
      <div>
      
        <div className="content">
          {
            this.state.loadedCharacter &&
              <div>
              <div className='navbar'>
              <img className='logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAACBCAMAAACLtrRTAAAAk1BMVEUAAAD/9SH/8CD/8yD/9yH/6R/34h6ThhH/7SBGPwhBOwj/6x9STgo5NAdORgqglBR6bg+qmhTk0x15cQ+LgxJbUwuBdhDgzBtRSgrQwBoTEQI1MAZWTguyphYyLAY/NwjBrxcnIgVqYA1xZw4eGgTx2x325x8ZFgNjWgzFuBnbzhyTixMsJgX//yIiHgTq2x0KCQEekcIIAAAPSElEQVR4nO1ca3eqsBKVCY9oTkWoQqliEYoVa4v//9fd8MwkoODx3HXvB/ZaZ61TBMxOJpM9k4mz2YQJEyZMmDBhwoQJEyZMmDBhwoQJ/3McLiW2EhYSlv14u/6v296Pz9fIBKINgej9+NlXrwmZ0YG2Ub9sTrt3FTDN1PWDzDkt/hGrOANCNF3XdN52XWIit19hWQEMWtG6nCmoPQEQqd+2oKzTgwQBXGf7L1hZBoAZJZsKf0bjrcRyzaCilZgsshUEkP92aEGo3uY4TsgRRZlvAkD++g9Y6TRfP/F8QmtaDuSdSZYYTH33gup3zSyOjqA7z07XV4P6Hft/BA2tS0qizodbv2OFnNbb/TeuXAD7mSbNZi8ppPOn3tDQ+qORuPtpBK7yek5rOfDKRQD0GQPi3ouQp8ZK0IrA7Pl0B6BMlBG0Zu8+kMGb7uFIsmcenwlaJgnba9f39r8mKF8whtZsY0LwRJvWYJ6eeLxATctjLGmvxVb7X4dQ+f5RtGYWHHtMeiwyCC5//3SJmlYE55f2mu22b90x3ZPul2nt1l6F1yTGLZm74Px9m87d5fJRxCUt3gxhg7OUtM7u4ivmJNNydChBmWGeMf9MNd4HcDgrfbKPzB4Y6KaeTwuV4VFkNHMdvdaGXHLoCi0wjjUYoNnJfdn5r8XGXqUVarSrbChFNzGmqkei72fXDHJxTwQsbf84mVRahBRaJN0tS7my8Xyqi1XY6awM43E9Y9Pho5dCsP6usK7hfeeYuwHRWsX77Nck4p5flxlUeCIfss97tFp1dWJEeB37CVrcgv0X9OdXAOm7es9Cmr2GZqk3cHgaCEXkcT1Oo/ZPi5jYCm/TWppkJT54hlYCILUyOVKpawvMR9DywRfdEYGfUTEzDkDwIx1ayyaaC7FajCA4PERFggtUohF2ZcsIWtsjEfNnnkK4MgzR8T646F6VluHmNZgmfObhOR89N8CVVi4fdGWBHkHLpmhV9wiZz3I0aT2iIc2u0NIYrcGOmQhi+OouL3cP4pvS7AuTyFXtO0yLT8lAvIPPT25DJG1tiM8Z5AtlWifbarBOxDuuPFDDrXocEZG9ocdkniNobVJ8B9E4iZOm/WkufGVwFh+PEk8W6M9JeG52VJdaakvL4hhaFjmKpdMmZjHaOPpaM1PMtDG01kCfUboluLyR7TgAtH6MocX9oPjjDOVgO0TEKXO88o2g5Ryf8e4Nljk1cNDFW5Gjbx6ktQciLIaLCme52y3XlIkRCoi/b/4/SGsRMDCfirZqbI9gYAEW82hHuP1BWg5hbaO5U2Rl4k1jyEMnOrT9NkBrGXHZG6h5nb/DqxLs2QRE/w/SciFr1+J90KYBmSvcOhXTVaa1UOMi58cw7JEJmmvs3YdPz9KrUrSCDtE6HdEK/j4XWAiHmoHRTysJFD/+ewaWlQ6/jMJWr6v4dNrslvOeAXz3dXIXlMipnhXRWrsaohWCOzgTEtp6IZlW/BMo8cc+gzKLSoqsqKZretF0jfx899AqTIPdQyh32s7Q28kwQGsfjAj4+DuiXlonvROfH5zUddM05ZEcVyA8xCxTx9BLiwSHl3tQrJkLg9bHD9CKGYyQOXxIP/ppGfSsOvP95bLfb7db3q6PCotUu0Fr+KsRHhitkBxHvHBlNGtjlxbku8Hn3X9CKxk/t8xRUvvTbXyhSst0ANxBXq7Wk+d9mFaENcJdWjsdktkIhCStfENntA6WAflQWu/f0MKy8D6tCNLWlX3FDU4FNpvTrl3Vl5pW0ZdpbXTjhYfTYA5kBX2tJ7/2KC2uG0T33aX1m6MO2BltOiotwENDIcrSOrHWQ6vkdd/v+OR5Wq9HCIVrvEvLMwzRHltjTXKsAF9TiJjoNjHKCKyP1izOBzZJfC3sXnyM1iqXBPRdWiEOrvmAxMmqhbfC0p5r4PJJlRYrHf8uB825k2B+npZlynH/PVoLnMzlSl6xJIsQ8Wm9bCvJap1VynHnEnonKXOT1nY+iOVykzgmQCrN3yIP/dLeI9NKNIgX9ScfDqSKo36hxLp+lvji2r6caZzWqXlkvoi1mlYRQ1NqbZbLvpZtfRJ19W8hnvqy0Gra2aDFLnYmN27uMvSwIWXHpPcaSraAO5QA0qxGFBilFS4ow9/JWKvzefRIqNHfUP7uHlrnAalLSLOtbwavStvmubQT/4Om9lV+rd7xVrZGCZBm96BM5MyVpuhiGscBqQsKuu3Tg05ednZdWbfRJKVXyWm57T47u6yl2200lh+2/KpOpL4JAp/jXPzjKGLkg/r90oTav3Gn4xXtUW9b/Z8WtfwXcEF+t0BtZ1v5apMq339gNAHcIurBE1uGPVisrW+1ZqMp3ejb4j4Uk0ts3fzU097R8aaOblb2sFNqZ2rN962DavBK6q1EeHsag5FG3q2U0vbVpzrpm1bloz+9q7UteTNahfQHX3KQTKumzTfg4iXWrCYpTbNAIMuCzKVNFCXgALtTNkWI67yojxTwzjwoZiaPIHthkJ7AhCtNCt/NarH4Blp61TmQdbuEzJfNXj3XBotdhbdV3uzZ7YnmvR8Efn9/v056txbDIa73egPrKOUe0eyR/BYFkn5v5oveIHe77Q0jZ0V6SOiMtzq5HBKplCKsKiuWBIW7a3JcNs01u/aTdusMHM2/t8u+LIrhOrU/DlD3rta9RcvSoP22awZlJi6VI8BVVYPAxYJQNwGpU1DXOlurNIewziXNv7/pu3KBKlMyoeDfTeNeb9H6YEgeWKwwhJjKFS5VHuX3jNJ+B2hSUonJenaATrSTyBikNfv0QUl0pWDer6O4SesrQKm/fV6ELxG4cq1YeUFqvxjjkOQ9U53rV9UKh2kVWu64Qn9bwAZK7b5u0eL+7Si2cDNwPz9cUGxhRbkV2pCLZvmk1ix7H1cRiTnv0FxJEo6gNVukgCdgMLih+n6T1iZHhQSxTjavzFgp9/Dw8YDbvzw2W8sbqgsuOzHusQmKbY6hVexYCuNdDlfM3B6tok9ED5kQhSRVb+GXTpomgq06lig/Qb7BoUIXKuUJCq3fdaEQSuXpeTgw8EF8eWJ2+lfFHVoWmEKAcN+eqjbIPQBhPjVb7/srZs4ROc2LjwJ0m5jyBHUIorV1a/nOYympyPSV6O1UXRnHweK/27QOOLOQGMzQOgrh12UMkT21FhYTlDZbMSp2ar50IluhNFr7MzvmTfUPRWkPvva3j3Facj5t7UsoNI3ZrzIKYF94CRj1u1LfAYMK3dBkVUofKfogBAPlv9qVrXkFcYXL3J/bgT3E3E+09spdUNT8nxuhpDsuQDvqk+o3ab1qRPRjSPtSPYlJUf2c22RYtthpvpsMKzSLUMnzq7SEN1hrRpsq/s2EZ5KcGccfnflYfZbwby4BH7gw6Y32FUjy1U3c8qI3xToeOyIb1IyUiozSWyr7MYUWarFFxKK7RaNV1D9gt/NrgGwA9/Ee4UICtyeKLnyfMC/uVqrRvYbEFTcH4HsE2qa/Z3DGjZJobc80OpU53nhlmyC+ks8t4UAsMKSxsBgNH4iFLYrmhI38oBiKLaqfc0lUNWOborhqewT7YiD1802lTLNMq0zv5HnOoyEA5Bk80NEKbIK01nDN+kgNjZTV+xRfHqMxF4pzdWzezSeluGzT9FS4kPbCXirMKxw8Hq0yocWjNk4Oq9kU1zwUm5VyYskFbXhzqAW3lz4FkKkCqGof5HU7AtSZBz4RrrM1RT3PlRjqeYnWbLFJVuXu9CrG3+ERWSKHlErBytsR0vFHaDzN6Fn4tjntGfKt32yevuP6s01ZzLnDI7QiaDAVWv3YpHDe4wu/PsjecM26FYC3wXqSD3zK9b0igWYFluQJjyaLbpXGXdq5s4dpJXwuqd3rg1yBbUHP2Y5byEj3aMFXRo2ewDckTc1BJovJIiMwd6hxQreit9rYZfTCM4F24v6FS+VFOetk9G9jBd0SlrnJWM8bzGa9fMMGt9GNwrHl3LEJoykDmgacVkeUYXxFRq+f2xypNJ143DRiT7m9N1KvcYnkUl+9Grf1PBYcRVdk4qyccCMf+NyPNFqd1efT0cA49x4J2lFcnc3/TsefPeALqxqx8ac9QtUiFe7eqsnDNQBaxFei8gbpcRxnS7QuaqKAO1Jm3ojH1kzeO+OybChgaeAZR+XWhQbeshMMXtqq1C3rLTqWkDBRjibTytVSlHcXjMKKi+Qflumum+eGEk6mo8/1XDqRPg8dF18ZKFboGU1l47dGh00hF1Yoza3LmajFP7OM1aUxauIW6FG2JKf1WoOIFEe1LwsmeBgsC98Q3Nrnu2OOHHFf2FixQovhUvISnyvLDvtgW4r49jRtFCeOjUakh72yvGVnyjVF83YDf9dNmfVgSbTGClVaBj4q9BiS8bSK0xTor2tUDQuX5dgAXklz2s2hY9zsuzj3o9JKjyOKZPqBt56HEEoG+1GLc09jeEFrVeBhTP3ZrKhbPtZqSKEF4VprxeWD6BMPt3CiuMDYI3rZiKtcUUganxTXZQcl6h2FEuU+t1gV4vbcj0rLKbYN8r/aBzP7pN4NvJxx/7cHJaSTSmvC3ppGmq1x7nzklKtIvF2tRITLaQmxUAX9XC2ZY1cgBAvX8gwiROmWPW2yEh5QsfYHjZC9Yj/IJXG7qVZuVQGqr3IaqdNDq0hcqcvlMObuQ6dnElPU1jqQ1mSWaEHjKrBu746IZC6P7t3inHpYnVPncKnQH4tj3UESrUudojmZ1HjwhPQ2ePA4KteF9VLyhXZHIhECWW2QiNYj3ntqOZWF0zxNIVDfaPF1xQUIHykDXwTQV2t3B1xX1LohRrsjFmsCg6vQHJJ4B6L03glvrnhadf5YFk9tQo13CgTjHWLsPhJvleAq0ClLH9YZzVth9MlX4Hnxqx7zpM24eoz51Y5+GDo+7bjbM/h1VYf1bUPFwCZp/FZjuXHboPcQcc0UvcYb8esN5S3lD4m04J+dEitMAdjDx/rd5lyn9HMWEdRV1oah1+aSaSi/Cl3haRPa7M1rpN5ot4E1SXdKmYFaZ5n1z3LolQIsURR81we4iqeqMppi5/zx41sONDETNqvTT1uzUK/F+zCoqmCK+u3U7AlpdfkHTYrVyf6R6x/QfHxzTAptGVI/OCVK08z7V79xwnltGjzz8yLb2qjKSgH+LiVUvl62izm6o7ilKSsobHL+8cSRyAkTJkyYMGHChAkTJkyYMGHChAkTnsF/AL1pXaKRFdXuAAAAAElFTkSuQmCC" alt='logo'></img>
              <a className='ab' href='https://www.google.com/'>About Us</a>
              <a className='cu' href='https://www.google.com/'>Contact Us</a>
              <a className='log_n' href='https://www.google.com/'>Log In</a>
           </div>  
                <h1 className="Name">{this.state.name}</h1>
                <p><img src={this.state.imageUrl} alt={this.state.name} className="img" /></p>
              <p className="meter">Height : {this.state.height}m</p>
              <p className="home">Homeworld : {this.state.homeworld}</p>
              </div>
          }
          <button
            type="button"
            onClick={() => this.getNewCharacter()}
            className="btn1">
            Randomize Character
          </button>
        </div>
        <div className="bg-img" style={{backgroundImage: `url(${this.state.imageUrl})`}}></div>
      </div>
    )
  }
}

export default StarWars;