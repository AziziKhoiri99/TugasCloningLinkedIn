import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Home extends Component {
    render(){
        return (
            <div>
                <Mui.Container fixed>
                <Mui.Grid container spacing={0}>
                    <Mui.Grid item xs={6}>
                        <br/>
                        <img src="https://blog-assets.hootsuite.com/wp-content/uploads/2025/05/linkedin-for-business-9-620x151.png" style={{width: 130}}/>
                        <br/><br/>
                        <h1 style={{color: "blue", fontSize: 50, fontFamily: "Arial, Helvetica, sans-serif"}}>Selamat datang di komunitas profesional ini</h1>
                        <form>
                            <Mui.TextField id="outlined-basic" label="Email atau nomor ponsel" variant="outlined" />
                            <br/><br/>
                            <Mui.TextField id="outlined-basic" label="Kata Sandi" variant="outlined" />
                        </form>
                    </Mui.Grid>
                    <Mui.Grid item xs={6}>
                         <h4>
                            <Mui.Button style={{marginLeft: 350}}>Bergabung Sekarang
                            </Mui.Button> 
                             <Mui.Button variant="outlined" color="primary" style={{float: "right", borderRadius: 50}}>
                                Login
                            </Mui.Button>
                         </h4>
                        <img src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz"/>
                    </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
            </div>
        )
    }
}

export default Home;