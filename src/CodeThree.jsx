

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
        <table>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>City</th>
            <th>Points</th>
          </tr>

          {
            user.users.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.rank}</td>
                  <td>{item.team}</td>
                  <td>{item.city}</td>
                  <td>{item.points}</td>
                </tr>
              )
            }
            )
          }
          {/* <tr>
            <td>1</td> <td>Ram</td> <td>Java</td>
          </tr>
          <tr>
            <td>2</td> <td>Sham</td> <td>Python</td>
          </tr>
          <tr>
            <td>3</td> <td>Rahim</td> <td>html</td>
          </tr> */}


        </table>
        {/* {
          user.users.map((item, i)=>{
            return(
              <div key={i}>
               
               <table border="10px" width="400px" align="center" cellSpacing="10px">
                   
                    <th>
                      <tr>Rank</tr> <td> {item.rank}</td> 
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
        } */}

      </div >
    </>
  )
}

export default CodeTwo;