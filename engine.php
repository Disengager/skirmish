<?php

class Site
{
	//public static $sql = ['host'=>'localhost', 'user'=>'disengager_u22', 'password'=>'Pj3u4hqx', 'db'=>'disengager_const'];

	public static function startmysql()
    {
        $sql = static::$sql;

        mysql_connect($sql['host'], $sql['user'], $sql['password']);
        mysql_select_db($sql['db']);

        mysql_query("SET NAMES 'utf8';");
        mysql_query("SET CHARACTER SET 'utf8';");
    }

    public static function mysqlquery($query)
    {
    	$tempArr = array();
    	$index = 0;
        $mysqlQuery = mysql_query($query);
		while($row = mysql_fetch_array($mysqlQuery))
		{
            $tempArr[$index] = $row;
        	$index++;
        }

        return $tempArr;
    }

	public static function Start()
    {
    	include('page/settings.php');
      include('page/main.php');
    }

    public static function ajax()
    {
        if(!$_GET['block']) die;
        switch ($_GET['block']) {
            case 'participants':
                {
                    ?>
                      <div class="participants-main main">
                        <div class="content">
                        </div>
                      </div>

                    <?php
                }
                break;
            case 'achievements':
                {
                   ?>
                     <div class="achievements-main main">
                       <div class="content"></div>
                     </div>
                    <?php
                }
                break;
            case 'others':
                {
                   ?>
                     <div class="others-main main">
                       <div class="content"></div>
                     </div>
                    <?php
                }
                break;
            case 'about':
                {
                   ?>
                     <div class="about-main main">
                       <div class="content"></div>
                     </div>
                    <?php
                }
                break;

            default:
                # code...
                break;
        }
    }
}

?>
