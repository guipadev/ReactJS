import { useState } from "react";
import { Container, Typography, Card, TextField, Grid, Button } from "@material-ui/core";

import { MovieIcon } from "../../icons";
import styles from "./style";

export default () => {
  const [searchText, setSearchText] = useState("");

	const classes = styles();   

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  //console.log(searchText);

	const handleCleanTextClick = event => {
		console.log(10)
	};

	const handleSearchTextClick = event => {
		console.log(10)
	};


  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
       <Grid container className={classes.titleGridContainer}>
				 <Grid>
				 	<Typography className={classes.title}>Bienvenido!</Typography>
				 </Grid>
				 <Grid>
					 <MovieIcon className={classes.movieIcon} />
				 </Grid>
			 </Grid>
			 <TextField 
				 value={searchText}
				 placeholder="Buscar..."
				 className={classes.textFieldSearch}
				 onChange={handleSearchTextChange}
			 />
			 <Grid className={classes.buttonsContainer}>
				 <Button
				 	variant="contained" 
					onClick={handleCleanTextClick}
					>
						Limpiar
					</Button>
				 	<Button
					 className={classes.searchButton}
					 color="primary"
					 variant="contained" 
					 size="large" 
					 onClick={handleSearchTextClick}
					>
						Buscar
					</Button>
			 </Grid>
      </Card>
    </Container>
  );
};
