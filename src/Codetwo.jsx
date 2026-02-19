

function CodeTwo() {



  const user = {
    "users": [
      {
        "rank": 1,
        "team": "RCB",
        "city": "Pune",
        "points": "19"
      },
      {
        "rank": 2,
        "team": "MI",
        "city": "Mumbai",
        "points": "18"
      },
      {
        "rank": 3,
        "team": "CSK",
        "city": "Chennai",
        "points": "16"
      },
      {
        "rank": 4,
        "team": "RR",
        "city": "Yavatmal",
        "points": "15"
      }
    ]
  }


  return (
    <>
      <h1>IPL Team India</h1>
      <div >
        {
          user.users.map((item, i) => {
            return (
              <div key={i}>
                <table border="10px" width="400px" align="center" cellSpacing="10px">
                  <th>
                    <tr>Rank</tr> 
                    <td> {item.rank}</td>
                  </th>
                  <th>
                    <tr>Name</tr><td> {item.team}</td>
                  </th>
                  <th>
                    <tr>City</tr> <td> {item.city}</td>
                  </th>
                  <th>
                    <tr>Points</tr> <td> {item.points}</td>
                  </th>
                </table>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default CodeTwo;