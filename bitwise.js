window.onload = () => {
    const initialArray = [
        { Name: "Stellah Tito", Age: 29, gender: "female" },
        { Name: "Tumain Moses", Age: 19, gender: "male" },
        { Name: "Magreth Shillah", Age: 18, gender: "female" },
        { Name: "Tumain Moses", Age: 20, gender: "male" },
        { Name: "Tumain Moses", Age: 12, gender: "male" },
        { Name: "Sabih Issah", Age: 09, gender: "female" },
        { Name: "Mwajuma Chapombe", Age: 32, gender: "female" }
    ]

    initialArray.forEach(item => {
        if (item.Name !== "Stellah Tito") {
            console.log(item)
            //There is nothing to change here
        }
    })

}