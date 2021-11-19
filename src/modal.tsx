import React, {useEffect, useState} from "react";
import {Prop} from "./App";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {duration} from "@mui/material";

type Itable = {
    name: string,
    data: [IData],
}

type IData = [string, string, string, number, number, string, number, number, string];

let result : IData[] | null;

export const ModalResult = (props: { onClose: () => void, open: boolean, filtr: Prop | null }) => {

    const {filtr, onClose, open} = props;


    const handleClose = () => {
        onClose();
    };


    const [table, setTable] = useState<[IData] | null>(null);
    // const [result, setResult] = useState<IData[] | null>(null);


    const fileHandler = async () => {
        if (filtr?.valueCategory === "Фильм") {
            const res = await fetch('/getFileFilm');
            const body = await res.json();
            let bod : [{name: string,data: [IData] | []}] = body;
            let filter = bod[0].data.filter((item,index) => item.length > 0 && index !== 0)
            setTable(body[0].data.data);
            result = filter;
            console.log(result,filter)
            result = DurationCheck();

        } else {
            const res = await fetch('/getFileSerial');
            const body = await res.json();
            let bod : [{name: string,data: [IData] | []}] = body;
            let filter = bod[0].data.filter((item,index) => item.length > 0 && index !== 0)
            setTable(body[0].data.data);
            result = filter;
            console.log(result)
            setTable(body[0]);
            result = CountCheck()
            result = AverageCheck()
            result = CompleteCheck()
        }
        result = GenreCheck()
        result = CountryCheck()
        result = RatingCheck()
        result = AgeCheck()
        result = AgeLimitCheck()
    }

    ///// film
    ///// film

    const DurationCheck = () => {
        if (filtr?.duration && filtr?.duration  !== "Любая") {
            let res = result && result.filter((item, index) =>
                (filtr.duration === "0" && item[6] > 2) ||
                    (filtr.duration === '2' && item[6] <= 2 && item[6] >= 1.5) ||
                    (filtr.duration === "1" && item[6] < 1.5));
            return res;
        } else {
            return result ? result : null;
        }
    }
    ///// film
    ///// film

    ///// serial
    ///// serial

    const CountCheck = () => {

        if (filtr?.count && filtr?.count  !== "Любая") {
            let res: IData[] | null = result && result.filter((item, index) =>
                ((filtr.count === "0" && item[6] > 4) ||
                    (filtr.count === "2" && item[6] >= 3 && item[6] <= 4) ||
                    (filtr.count === "4" && item[6] < 3)));
            return res;
        } else {
            return result ? result : null;
        }
    }


    const AverageCheck = () => {

        if (filtr?.average && filtr?.average  !== "Любая") {
            let res: IData[] | null = result && result.filter((item, index) =>
                ((filtr.average === "0" && item[7] > 40) ||
                    (filtr.average === "39" && item[7] >= 30 && item[7] <= 40) ||
                    (filtr.average === "29" && item[7] < 30)));
            return res;
        } else {
            return result ? result : null;
        }
    }

    const CompleteCheck = () => {

        if (filtr?.complete && filtr?.complete  !== "Любая") {
            let res: IData[] | null = result && result.filter((item, index) =>
                ((filtr.complete === "Да" && item[8] === "Да") ||
                    (filtr.complete === "Нет" && item[8] === "Нет")));
            return res;
        } else {
            return result ? result : null;
        }
    }

    ///// serial
    ///// serial

    const GenreCheck = () => {
        console.log(filtr?.genre && filtr?.genre  !== "Любая");
        if (filtr?.genre && filtr?.genre  !== "Любая") {
            let res: IData[] | null = result && result.filter((item, index) =>
                ((filtr.genre === "Анимационный" && item[1] === "Анимационный") ||
                    (filtr.genre === "Боевик" && item[1] === "Боевик") ||
                    (filtr.genre === "Детектив" && item[1] === "Детектив") ||
                    (filtr.genre === "Драма" && item[1] === "Драма") ||
                    (filtr.genre === "Исторический" && item[1] === "Исторический") ||
                    (filtr.genre === "Комедия" && item[1] === "Комедия") ||
                    (filtr.genre === "Мелодрама" && item[1] === "Мелодрама") ||
                    (filtr.genre === "Семейный" && item[1] === "Семейный") ||
                    (filtr.genre === "Триллер" && item[1] === "Триллер") ||
                    (filtr.genre === "Фантастика" && item[1] === "Фантастика")))
            console.log(res)
            return res;
        } else {
            return result ? result : null;
        }
    }

    const CountryCheck = () => {

        if (filtr?.country && filtr?.country !== "Любая") {
            let res: IData[] | null = result && result.filter((item, index) =>
                ((filtr.country === "Зарубежное" && item[2] === "Зарубежное") ||
                    (filtr.country === "Русское" && item[2] === "Русское")));
            return res;
        } else {
            return result ? result : null;
        }
    }

    const RatingCheck = () => {

        if (filtr?.rating && filtr?.rating !== "Любая") {
            let res: IData[] | null = result && result.filter((item, index) =>
                ((filtr.rating === "4" && item[3] < 5) ||
                    (filtr.rating === "7" && item[3] >= 5 && item[3] <= 8) ||
                    (filtr.rating === "0" && item[3] > 8)));
            return res;
        } else {
            return result ? result : null;
        }
    }

    const AgeCheck = () => {

        if (filtr?.age && filtr?.age !== "Любая") {
            let res: IData[] | null = result && result.filter((item, index) =>
                ((filtr.age === "1959" && item[4] < 1960) ||
                    (filtr.age === "1989" && item[4] >= 1960 && item[3] <= 1990) ||
                    (filtr.age === "2009" && item[4] >= 1990 && item[3] <= 2010) ||
                    (filtr.age === "0" && item[4] > 2010)));
            return res;
        } else {
            return result ? result : null;
        }
    }


    const AgeLimitCheck = () => {
        console.log(result,'result')
        if (filtr?.ageLimit &&  filtr?.ageLimit !== "Любая") {
            let res: IData[] | null = result && result.filter((item, index) =>
                ((filtr.ageLimit === "0+" && item[5] === "0+") ||
                    (filtr.ageLimit === "6+" && item[5] === "6+") ||
                    (filtr.ageLimit === "12+" && item[5] === "12+") ||
                    (filtr.ageLimit === "16+" && item[5] === "16+") ||
                    (filtr.ageLimit === "18+" && item[5] === "18+")));
            return res;
        } else {
            return result ? result : null;
        }
    }


    useEffect(() => {
        fileHandler();
    }, [filtr])
    console.log(result,'result')
    return (
        <Dialog onClose={handleClose} open={open} maxWidth={"xl"}>
            <DialogTitle style={{marginLeft:'auto',marginRight:'auto',fontWeight:'bold'}}>Результат</DialogTitle>
            <List sx={{pt: 0}}>
                {result && result.map((film, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            {filtr?.valueCategory == "Фильм" ? <div>
                                 <p style={{fontWeight:'bold'}}>{film[0]}</p> {film[1]}, {film[2]}, рейтинг: {film[3]}, {film[4]}, {film[5]}, время: {film[6]} ч
                                </div> :
                                <div>
                                    <p style={{fontWeight:'bold'}}>{film[0]}</p>  {film[1]}, {film[2]}, рейтинг: {film[3]}, {film[4]}, {film[5]}, {film[6]} сезон, серия в среднем {film[7]} мин, {film[8] === "Да" ? "Завершён" : "Не завершён"}
                                </div>
                            }
                        </ListItemAvatar>
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}
