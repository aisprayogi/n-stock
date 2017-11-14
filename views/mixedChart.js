<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
<script type="text/javascript">
var mixedChart = new Chart(ctx, {
  type: 'bar',
  data: {
    datasets: [{
          label: 'Bar Dataset',
          data: [10, 20, 30, 40]
        }, {
          label: 'Line Dataset',
          data: [50, 50, 50, 50],

          // Changes this dataset to become a line
          type: 'line'
        }],
    labels: ['January', 'February', 'March', 'April']
  },
  options: options
});
</script>
</body>
</html>
