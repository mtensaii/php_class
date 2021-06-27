<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Homework</title>
    <link rel="shortcut icon" type="image/png" href="assets/pictures/shortcuticon.jpg">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <div id="wrapper">
        <div id="box-container">

            <!-- START exercise 1 -->
            <div class="box ">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/FDmRtDUW2v4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <form id="form-input">
                    <div class="form-row">
                        <div class="col">
                            <input type="number" name="number1" class="form-control" placeholder="Number1" id="number1">
                        </div>
                        <div class="col">
                            <input type="number" name="number2" class="form-control" placeholder="Number2" id="number2">
                        </div>
                    </div>

                    <div class="form-row mt-5" >
                        <div class="col">
                            <button id="cal-btn" name="submit" type="submit" class="btn btn-primary">
                                Sum
                            </button>
                        </div>

                        <div class="col">
                            <input type="text" class="form-control" id="result">
                        </div>

                    </div>
                </form>
            </div>
            <!-- END exercise 1 -->



        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    <script>
        $(document).ready(function() {
            // debugger;
            $("#cal-btn").on("click", function() {
                var num1 = $('#number1').val();
                var num2 = $('#number2').val();
                $.ajax({
                    type: 'POST',
                    url: 'cal.php',
                    dataType: 'html',
                    data: {number1 : num1, number2 : num2},

                    success: function(result) {
                        console.log(result);
                        $("#result").val(result);
                    },

                    error: function() {
                        console.log('error!!!');
                    }
                });

                return false;
            });
        })
    </script>
</body>

</html>