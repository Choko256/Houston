/*
 * Copyright (c) 2020 · Marton Lederer
 * This file was created / generated by Marton Lederer
 * See the LICENSE on the github repo
 * https://github.com/MartonDev
 * https://marton.lederer.hu
 */

import { Color, Format, LogLevel, Options, Transport } from './types.ts'

/*
*
* Create a new Houston logger
*
* @param format The format of the log. Default: Houston.text
* @param transports The list of transports to use
* @param options  The options to use globally by default with all transports
*
* */
export class Houston {

  private readonly format: Format
  private readonly transports: Array<Transport>
  private readonly options: Options

  /*
  *
  * Initialize the logger
  *
  * */
  constructor (

    transports: Array<Transport>,
    format: Format = Format.text,
    options: Options = {

      logColors: [

        Color.White,
        Color.Green,
        Color.Yellow,
        Color.Red

      ]

    }

  ) {

    this.format = format
    this.transports = transports
    this.options = options

  }

  /*
  *
  * Logging something
  *
  * This will go through the given transports and call them to log your message if the logging level is configured
  *
  * @param level  The level of the log, 0 by default
  * @param message  The log message
  *
  * */
  log (level: LogLevel, message: string) {

    for(const transport in this.transports)
      this.transports[transport].log(level, message, this.options)
  }

}