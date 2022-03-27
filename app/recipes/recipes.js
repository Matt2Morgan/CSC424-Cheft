$( document ).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const search = urlParams.get('search');


    $.ajax({url:"recipes.php",
            type: 'post',
            data: { "search": search},
     success:function(result){
        const returnArr = result.split("@");
        for (i = 0; i < returnArr.length - 1; i++)
        {
            let temp = returnArr[i].split("|");

            if(document.getElementById("returnTable") != null){
                document.getElementById("returnTable").innerHTML+=`
                <div class="row no-gutters">
                    <div class="col-sm-2">
                        <img src="../..${temp[2]}" width="100px" height="100px">
                    </div>
                    <div class="col-sm-10">
                        <div class="widget-entry">
                            <span style="font-size: 24px;">${temp[1]}</span>
                            <span style="font-size: 16px;">Author: ${temp[0]}</span>
                            <span style="font-size: 12px;">Tags: ${temp[0]}</span>
                            <span style="font-size: 12px;"><span>Views: ${temp[0]}</span> <span>Date: ${temp[0]}</span></span>
                        </div>
                    </div>
                </div>
            `}
        }
        }
    })
});