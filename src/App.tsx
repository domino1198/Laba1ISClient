import React, {useEffect, useState} from 'react';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {ModalResult} from "./modal";

export type Prop = {
    valueCategory: string,
    duration: string,
    count: string,
    average: string,
    complete: string,
    genre: string,
    country: string,
    rating: string,
    age: string,
    ageLimit: string,
}


function App() {
    const [valueCategory, setValueCategory] = React.useState("Фильм");
    const [duration, setDuration] = React.useState('Любая');
    const [count, setCount] = React.useState('Любая');
    const [average, setAverage] = React.useState('Любая');
    const [complete, setComplete] = React.useState('Любая');
    const [genre, setGenre] = React.useState('Любая');
    const [country, setCountry] = React.useState('Любая');
    const [rating, setRating] = React.useState('Любая');
    const [age, setAge] = React.useState('Любая');
    const [ageLimit, setAgeLimit] = React.useState('Любая');
    const [filtr, setFiltr] = useState<null | Prop>(null);
    const [open, setOpen] = React.useState(false);

    const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueCategory((event.target as HTMLInputElement).value);
    };
    const handleChangeDuration = (event: SelectChangeEvent) => {
        setDuration(event.target.value as string);
    };
    const handleChangeCount = (event: SelectChangeEvent) => {
        setCount(event.target.value as string);
    };
    const handleChangeAverage = (event: SelectChangeEvent) => {
        setAverage(event.target.value as string);
    };
    const handleChangeComplete = (event: SelectChangeEvent) => {
        setComplete(event.target.value as string);
    };
    const handleChangeGenre = (event: SelectChangeEvent) => {
        setGenre(event.target.value as string);
    };
    const handleChangeCountry = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string);
    };
    const handleChangeRating = (event: SelectChangeEvent) => {
        setRating(event.target.value as string);
    };
    const handleChangeAge = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const handleChangeAgeLimit = (event: SelectChangeEvent) => {
        setAgeLimit(event.target.value as string);
    };

    const FindFilm = () => {
        setFiltr({
            valueCategory,
            duration,
            count,
            average,
            complete,
            genre,
            country,
            rating,
            age,
            ageLimit,
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{width: '100%', display: 'flex', alignItems: "center", flexDirection: 'column'}}>
            <div style={{marginTop:25,fontWeight:'bold',fontSize:28,color:'#1976d2'}}>Помошник по выбору кино</div>
            <div style={{
                flex: "1 0 auto",
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                marginLeft: 20
            }}>
                <div style={{
                    width: '85%',
                    marginInline: '5%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Box style={{display: 'flex', flexDirection: 'row', width: '100%', marginBottom: '2%'}}
                         sx={{minWidth: 120}}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Тип</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                defaultValue="female"
                                name="radio-buttons-group"
                                value={valueCategory}
                                onChange={handleChangeCategory}
                            >
                                <FormControlLabel value="Фильм" control={<Radio/>} label="Фильм"/>
                                <FormControlLabel value="Сериал" control={<Radio/>} label="Сериал"/>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'row', width: '100%', marginBottom: '3%'}}
                         sx={{minWidth: 120}}>
                        <FormControl style={{width: "20%"}} fullWidth>
                            <InputLabel id="demo-simple-select-label">Жанр</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={genre}

                                label="Жанр"
                                onChange={handleChangeGenre}
                            >
                                <MenuItem value={"Анимационный"}>Анимационный</MenuItem>
                                <MenuItem value={"Боевик"}>Боевик</MenuItem>
                                <MenuItem value={"Детектив"}>Детектив</MenuItem>
                                <MenuItem value={"Драма"}>Драма</MenuItem>
                                <MenuItem value={"Исторический"}>Исторический</MenuItem>
                                <MenuItem value={"Комедия"}>Комедия</MenuItem>
                                <MenuItem value={"Мелодрама"}>Мелодрама</MenuItem>
                                <MenuItem value={"Семейный"}>Семейный</MenuItem>
                                <MenuItem value={"Триллер"}>Триллер</MenuItem>
                                <MenuItem value={"Фантастика"}>Фантастика</MenuItem>
                                <MenuItem value={"Любая"}>Любой</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{width: "20%", marginInline: '5%'}} fullWidth>
                            <InputLabel id="demo-simple-select-label">Страна</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={country}
                                label="Страна"
                                onChange={handleChangeCountry}
                            >
                                <MenuItem value={"Зарубежное"}>Зарубежное</MenuItem>
                                <MenuItem value={"Русское"}>Русское</MenuItem>
                                <MenuItem value={"Любая"}>Любая</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{width: "20%", marginRight: '5%'}} fullWidth>
                            <InputLabel id="demo-simple-select-label">Рейтинг</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={rating}
                                label="Рейтинг"
                                onChange={handleChangeRating}
                            >
                                <MenuItem value={'4'}>Меньше 5</MenuItem>
                                <MenuItem value={'7'}>От 5 до 8</MenuItem>
                                <MenuItem value={'0'}>Больше 8</MenuItem>
                                <MenuItem value={"Любая"}>Любой</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{width: "20%", marginRight: '5%'}} fullWidth>
                            <InputLabel id="demo-simple-select-label">Год</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Год"
                                onChange={handleChangeAge}
                            >
                                Год (раньше 1960, от 1960 до 1990, от 1990 до 2010, позже 2010),
                                <MenuItem value={'1959'}>Раньше 1960</MenuItem>
                                <MenuItem value={'1989'}>От 1960 до 1990</MenuItem>
                                <MenuItem value={'2009'}>От 1990 до 2010</MenuItem>
                                <MenuItem value={'0'}>Позже 2010</MenuItem>
                                <MenuItem value={"Любая"}>Любой</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{width: "20%"}} fullWidth>
                            <InputLabel id="demo-simple-select-label">Возрастные ограничения</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ageLimit}
                                label="Возрастные ограничения"

                                onChange={handleChangeAgeLimit}
                            >
                                <MenuItem value={'0+'}>0+</MenuItem>
                                <MenuItem value={'6+'}>6+</MenuItem>
                                <MenuItem value={'12+'}>12+</MenuItem>
                                <MenuItem value={'16+'}>16+</MenuItem>
                                <MenuItem value={'18+'}>18+</MenuItem>
                                <MenuItem value={"Любая"}>Любой</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'row', width: '100%', marginBottom: '5%'}}
                         sx={{minWidth: 120}}>
                        {valueCategory !== 'Фильм' ?
                            <>
                                <FormControl style={{width: "30%"}} fullWidth>
                                    <InputLabel id="demo-simple-select-label">Кол-во сезонов</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={count}

                                        label="Кол-во сезонов"
                                        onChange={handleChangeCount}
                                    >
                                        <MenuItem value={'2'}>до 3</MenuItem>
                                        <MenuItem value={'4'}>от 3 до 4</MenuItem>
                                        <MenuItem value={'0'}>больше 4</MenuItem>
                                        <MenuItem value={"Любая"}>Любое</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl style={{width: "30%", marginInline: '5%'}} fullWidth>
                                    <InputLabel id="demo-simple-select-label">Средняя продолжительность
                                        серии</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={average}
                                        label="Средняя продолжительность серии"

                                        onChange={handleChangeAverage}
                                    >
                                        <MenuItem value={'29'}>до 30 минут</MenuItem>
                                        <MenuItem value={'39'}>30-40 минут</MenuItem>
                                        <MenuItem value={'0'}>больше 40 минут</MenuItem>
                                        <MenuItem value={"Любая"}>Любая</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl style={{width: "30%", marginRight: '5%'}} fullWidth>
                                    <InputLabel id="demo-simple-select-label">Завершенность</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={complete}
                                        label="Завершенность"

                                        onChange={handleChangeComplete}
                                    >
                                        <MenuItem value={"Да"}>Да</MenuItem>
                                        <MenuItem value={"Нет"}>Нет</MenuItem>
                                        <MenuItem value={"Любая"}>Любая</MenuItem>
                                    </Select>
                                </FormControl>
                            </>
                            :
                            <FormControl style={{width: "20%", marginRight: '5%'}} fullWidth>
                                <InputLabel id="demo-simple-select-label">Длительность</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={duration}
                                    label="Длительность"

                                    onChange={handleChangeDuration}
                                >
                                    <MenuItem value={'1'}>До 1,5 часа</MenuItem>
                                    <MenuItem value={'2'}>1,5-2 часа</MenuItem>
                                    <MenuItem value={'0'}>Больше 2х часов</MenuItem>
                                    <MenuItem value={"Любая"}>Любая</MenuItem>
                                </Select>
                            </FormControl>
                        }

                    </Box>
                </div>
            </div>
            <Button
                onClick={FindFilm}
                style={{marginTop: '3%'}} variant={"contained"} color={'primary'}>{!filtr ? "Подобрать фильм" : "Изменить подборку" }</Button>
            <div style={{marginTop: "5%", display: filtr ? 'flex' : 'none', alignItems: 'center'}}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Открыть подобранные варианты
                </Button>
                <ModalResult
                    filtr={filtr}
                    open={open}
                    onClose={handleClose}
                />
            </div>
        </div>
    );
};

export default App;
